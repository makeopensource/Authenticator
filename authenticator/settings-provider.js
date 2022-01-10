import React, {
  useCallback, useLayoutEffect, useMemo, useState,
} from 'react';
import { PropTypes } from 'prop-types';
import { getSettingsStorage, updateSettingsStorage } from './settings-storage';

const defaultSettings = {
  fontColor: '#000000',
  primaryColor: '#F2F2F2',
  accentColor: '#FFFFFF',
};
const SettingsContext = React.createContext({
  data: defaultSettings,
  update: () => {},
});

export default function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(defaultSettings);
  const updateSettings = useCallback(
    async (newSettings) => {
      if (await updateSettingsStorage(newSettings)) {
        const copy = { ...settings };
        setSettings(Object.assign(copy, newSettings));
      }
    },
    [settings],
  );
  const value = useMemo(() => ({
    data: settings,
    update: updateSettings,
  }), [settings, updateSettings]);

  useLayoutEffect(() => {
    async function loadStoredSettings() {
      const storedSettings = await getSettingsStorage();
      setSettings(Object.assign(defaultSettings, storedSettings));
    }
    loadStoredSettings();
  }, []);

  return (
    <SettingsContext.Provider value={value}>
      { children }
    </SettingsContext.Provider>
  );
}

SettingsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.arrayOf(PropTypes.node).isRequired,
  ]).isRequired,
};

export {
  SettingsContext,
};
