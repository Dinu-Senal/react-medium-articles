import './MediumArticleOne.css'

export default function MediumArticleOne() {

    function Person ({ personId, onPersonClick }) {
        return (
          <div className="person-section">
            <button onClick={onPersonClick} className="person-button">
              {personId}
            </button>
          </div>
        );
    };

    function Theatre () {

        const totalRows = 3;
        const totalPersonPerRow = 3;
        const theatreRows = [];

        const handlePerson = (id) => {
          console.log(`${id} person checked in`)
        };

        const renderPersonRow = (row) => {
            const personsPerRow = [];
            const startingPoint = row * totalPersonPerRow;
            for (let i = 0; i < totalPersonPerRow; i++) {
                personsPerRow.push(
                    <Person 
                        key={i} 
                        personId={startingPoint + i} 
                        onPersonClick={() => handlePerson(startingPoint + i)} 
                    />
                );
            };

            return (
                <div className="theatre-row" key={row}>
                    {personsPerRow}
                </div>
            );
        };
        
        for(let i=0; i < totalRows; i++) {
            // stores theatre rows one by one
            theatreRows.push(
                renderPersonRow(i)
            );
        };
     
        return (
          <div className="theatre-section">
            {theatreRows}
          </div>
        );
    };

    return (
        <Theatre />
    );
};