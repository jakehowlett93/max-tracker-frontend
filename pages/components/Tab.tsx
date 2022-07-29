import React from 'react';
import { Button } from 'react-bootstrap';

type Props = {
    label: String,
    setCurrentTable: any,

}

const Tab = ({label, setCurrentTable}: Props) => {
    
    const handleTabClick = () => {
        setCurrentTable(label);
    }

    return (
        <Button className="p-3 border" onClick={handleTabClick}>
            {label}
        </Button>
    )
}

export default Tab;