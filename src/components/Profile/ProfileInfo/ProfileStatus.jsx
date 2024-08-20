import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
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
    }

    render() {
        return (
            <div className={s.ProfileInfo}>
                {!this.state.editMode ?
                    <div onDoubleClick={this.activateEditMode}>
                        <span>{this.props.status}</span>
                    </div>
                    :
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;