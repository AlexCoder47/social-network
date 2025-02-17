import React, { useEffect, useState } from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusithHooks = (props) => {

    // state = {
    //     editMode: false,
    //     status: this.props.status
    // }

    // activateEditMode = () => {
    //     this.setState({
    //         editMode: true
    //     })
    // }

    // deactivateEditMode = () => {
    //     this.setState({
    //         editMode: false
    //     })
    //     this.props.updateStatus(this.state.status)
    // }

    // onStatusChange = (e) => {
    //     this.setState({
    //         status: e.currentTarget.value
    //     });

    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         });
    //     }
    // }

    // componentDidMount(prevProps, prevState) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {setStatus(props.status)}, [props.status])


    const activateEditMode = () => {setEditMode(true)};
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {setStatus(e.currentTarget.value)};

    return (
        <>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "-------------"}</span>
                </div>
            }
            {
                editMode &&
                <div>
                    <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status}/>
                </div>
            }
        </>
    )
}

export default ProfileStatusithHooks;