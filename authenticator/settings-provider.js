import React, {
  useCallback, useLayoutEffect, useMemo, useState, useContext,
} from 'react';
import { PropTypes } from 'prop-types';
import { getSettingsStorage, updateSettingsStorage } from './settings-storage';
import { getDefaultFont } from './font-settings';

const defaultSettings = {
  fontColor: '#000000',
  primaryColor: '#F2F2F2',
  accentColor: '#FFFFFF',
  fontFamily: getDefaultFont(),
  fontScale: 1,
};
const SettingsContext = React.createContext({
  data: defaultSettings,
  update: () => {},
});

export default function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(defaultSettings);
  const updateSettings = useCallback(
    async (newSettings) => {
      if (await updateSettingsStorage(newSettings.toString())) {
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
      const copy = { ...defaultSettings };
      setSettings(Object.assign(copy, storedSettings));
    }
    loadStoredSettings();
  }, []);

  return (
    <SettingsContext.Provider value={value}>
      { children }
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const settings = useContext(SettingsContext);
  return [settings.data, settings.update];
}

SettingsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.arrayOf(PropTypes.node).isRequired,
  ]).isRequired,
};
