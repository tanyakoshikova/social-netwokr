import React from "react";
import {sendMessageCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
  }

// let AuthRedirectComponent = withAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);
//функция compose в нее оборачиваются выше прописанные вызовы
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect) (Dialogs);
