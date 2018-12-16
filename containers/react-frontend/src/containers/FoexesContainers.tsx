import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Action, fetchBegin } from "../actions/foxes";
import { Foxes } from "../components/Foxes";
import { State } from "../reducers";

const mapStateToProps = (state: State) => ({
  ...state.foxes
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  onLoad: () => {
    dispatch(fetchBegin());
  }
});

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export const FoxesContainer = connector(Foxes);
