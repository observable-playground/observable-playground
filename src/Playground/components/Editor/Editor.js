import React, { Component } from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

export class EditorComponent extends Component {
    render() {
        return (
            <AceEditor
                name="AceEditor_EditorComponent"

                mode="javascript"
                theme="monokai"

                defaultValue={ this.props.defaultValue }
                value={ this.props.value }

                width="100%"

                showGutter={true}
                tabSize={2}
                wrapEnabled={true}
                editorProps={{ $blockScrolling: true }}
                debounceChangePeriod={ 500 }

                onChange={this.props.onChange}
            />
        )
    }
}