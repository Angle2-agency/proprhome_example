import { store } from "../../store";
import { actions as requests } from "./requests";

import bindActionCreators from "react-redux/lib/utils/bindActionCreators";

const dispatch = store.dispatch;
const actions = {
  ...requests,
};

const servises = bindActionCreators(actions, dispatch);

export default servises;
