import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
        
    }

    // componentDidMount(prevProps, prevState) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }

    render() {
        return (
            <div className={s.ProfileInfo}>
                {!this.state.editMode ?
                    <div onDoubleClick={this.activateEditMode}>
                        <span>{this.props.status || "-------------"}</span>
                    </div>
                    :
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;