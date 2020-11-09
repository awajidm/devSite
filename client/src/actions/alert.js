import { SET_ALERT, REMOVE_ALERT } from "./types";
import uuid from "uuid";

const setAlert = (msg, alertType) => (dispath) => {
  const id = uuid.v4();
  dispath({
      type: SET_ALERT,
      payload: { msg, alertType, id }
  });
};

export default setAlert;
