import React from 'react';
import Form from 'react-bootstrap/Form';

type Props = {
    columns: any,
}

const ToggleColumnWidget = ({ columns, }: Props) => {

    const columnChoices = columns.map((column: any) => {
        // eslint-disable-next-line react/jsx-key
        return (<Form>
            <div key={column.id} className="mb-3">
                <Form.Check 
                    type="checkbox"
                    value={column.id}
                    label={column.id}
                    {...column.getToggleHiddenProps()}
                />
            </div>
        </Form>
    )})

    return (
        <div>
            {columnChoices}
        </div>
    )
}

export default ToggleColumnWidget;