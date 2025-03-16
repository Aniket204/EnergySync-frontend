import React from 'react';
import UnitCard from './UnitCard';

const CardList = ({ data, onCardClick }) => {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {data.map((unit) => (
                    <UnitCard key={unit.id} data={unit} onCardClick={onCardClick} />
                ))}
            </div>
        </div>
    );
};

export default CardList;
