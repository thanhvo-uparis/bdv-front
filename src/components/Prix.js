import "./prix.css";

const volsInfos = [
    {
        id: 1,
        tour: "Rennes - Toulouse",
        aller: "07/08/21",
        retour: "14/08/21",
        prix: 178,
        reservation: "03/08/21",
    },
    {
        id: 2,
        tour: "Rennes - Toulouse",
        aller: "07/08/21",
        retour: "14/08/21",
        prix: 178,
        reservation: "03/08/21",
    },
    {
        id: 3,
        tour: "Rennes - Toulouse",
        aller: "07/08/21",
        retour: "14/08/21",
        prix: 178,
        reservation: "03/08/21",
    },
    {
        id: 4,
        tour: "Rennes - Toulouse",
        aller: "07/08/21",
        retour: "14/08/21",
        prix: 178,
        reservation: "03/08/21",
    },
    {
        id: 5,
        tour: "Rennes - Toulouse",
        aller: "07/08/21",
        retour: "14/08/21",
        prix: 178,
        reservation: "03/08/21",
    },
    {
        id: 6,
        tour: "Rennes - Toulouse",
        aller: "07/08/21",
        retour: "14/08/21",
        prix: 178,
        reservation: "03/08/21",
    },
    {
        id: 7,
        tour: "Rennes - Toulouse",
        aller: "07/08/21",
        retour: "14/08/21",
        prix: 178,
        reservation: "03/08/21",
    },
    {
        id: 8,
        tour: "Rennes - Toulouse",
        aller: "07/08/21",
        retour: "14/08/21",
        prix: 178,
        reservation: "03/08/21",
    },
    {
        id: 9,
        tour: "Rennes - Toulouse",
        aller: "07/08/21",
        retour: "14/08/21",
        prix: 178,
        reservation: "03/08/21",
    },
];


const Prix = () => {
    return (
        <div className="prix-container">
            <div className="prix-app">
                {volsInfos.map(info => {
                    return (
                        <div className="app-item">
                            <h4 className="item-tour">{info.tour}</h4>
                            <p className="item-aller">Aller {info.aller}</p>
                            <p className="item-retour">Retour {info.retour}</p>
                            <p className="item-prix">{info.prix}€ *</p>
                            <p className="item-reservation">Réservé le {info.reservation}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    );
}
 
export default Prix;