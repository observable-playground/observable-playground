import React, { Component } from 'react';
import './EditorComponent.css';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

export class EditorComponent extends Component {
    render() {
        const height
            = this.props.viewHeight
            ? (this.props.viewHeight + 'px')
            : '500px'
            ;

        return (
            <AceEditor
                className="EditorComponent"
                name="AceEditor_EditorComponent"

                mode="javascript"
                theme="monokai"

                defaultValue={ this.props.defaultValue }
                value={ this.props.value }

                width="100%"
                height={ height }

                showGutter={true}
                tabSize={2}
                wrapEnabled={true}
                setOptions={{ showFoldWidgets: false }}

                editorProps={{ $blockScrolling: true }}
                debounceChangePeriod={ 500 }

                onChange={this.props.onChange}
            />
        )
    }
}