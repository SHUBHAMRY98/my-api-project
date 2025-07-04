import { configureStore } from '@reduxjs/toolkit';
import keywordsReducer from './slices/keywordsSlice';
import userReducer from './slices/userSlice';
import projectsReducer from './slices/projectsSlice';
import integrationsReducer from './slices/integrationsSlice';
import apiKeysReducer from './slices/apiKeysSlice';

export const store = configureStore({
  reducer: {
    keywords: keywordsReducer,
    user: userReducer,
    projects: projectsReducer,
    integrations: integrationsReducer,
    apikeys: apiKeysReducer,
  },
});
