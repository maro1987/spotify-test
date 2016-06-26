import createAction from '../../utils/redux/create-action';

export const AppActionTypes = {
  APP_STARTED: 'APP_STARTED'
};

export function appStarted() {
  return createAction(AppActionTypes.APP_STARTED);
}
