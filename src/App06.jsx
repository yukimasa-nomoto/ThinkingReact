import { useState } from 'react';
import { initialTravelPlan } from './place';

export default function App() {

    const[plan , setPlan] = useState(initialTravelPlan);

    function handleComplete(parentId, childId) {
        const parent = plan[parentId];

        const nextParent = {
            ...parent,
            childIds: parent.childIds
                .filter(id => id !== childId)
        };

        setPlan({
            ...plan,
            // ...so that it has the updated parent.
            [parentId]: nextParent
        });        
    }
    const root = plan[0];
    const planetIds = root.childIds;

    const planets = planetIds.map((value , index , array) =>{
        //console.log(value, index, array);
        return (
            <PlaceTree key={value} id={value} placesById={plan}
            onComplete={handleComplete} parentId={0}
            />

        )
    })

    function PlaceTree({ id, parentId, placesById, onComplete }) {
        console.log(id, parentId, placesById, onComplete);
        const place = placesById[id];
        const childIds = place.childIds;

        const childs = childIds.map((value, index, array) => {

            var child = placesById[value];
            return(
                <PlaceTree key={value} id={value} placesById={placesById}
                onComplete={onComplete} parentId={id}
                />
            )
        })

        return(
            <li>
                {place.title}
                <button onClick={() => onComplete(parentId,id)}>
                    Complete
                </button>
                {childIds.length > 0 && 
                    <ol>
                        {childs}
                    </ol>
                }
            </li>
        )
    }

    return (
        <div>
            <h1>Welcome to the React App</h1>
            <p>This is a simple React application.</p>
            <h2>Places to visit</h2>
            <ol>
                {planets}
            </ol>
        </div>
    );
}