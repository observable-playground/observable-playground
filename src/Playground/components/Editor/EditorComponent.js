import React from 'react';
import './EditorComponent.css';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

export function EditorComponent ({ value, defaultValue, onChange }){
    return (
        <AceEditor
            className="EditorComponent"
            name="AceEditor_EditorComponent"

            mode="javascript"
            theme="monokai"

            defaultValue={ defaultValue }
            value={ value }

            width="100%"
            maxLines={Infinity}

            showGutter={true}
            tabSize={2}
            wrapEnabled={false}
            showPrintMargin={false}
            setOptions={{ showFoldWidgets: false }}

            editorProps={{ $blockScrolling: true }}
            debounceChangePeriod={ 500 }

            onChange={onChange}
        />
    )
}