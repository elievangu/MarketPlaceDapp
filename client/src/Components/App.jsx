import React, { Component } from "react";
import getWeb3 from "../getWeb3";
import MarketPlaceContract from "../contracts/MarketPlace.json";
import MainTable from "./Tables/MainTable";
import CompanyPanel from "./Panels/CompanyPanel";
import IllustratorPanel from "./Panels/IllustratorPanel";
import "../App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexDemande: 0,
      demandes: [{description:"Bla bla bla",
        id: 0,
        remuneration: 10000,
        delais: 360000,
        reputation: 4,
        etat: "ENCOURS"}, {description:"Bla bla bla bla bla",
        id: 1,
        remuneration: 5000,
        delais: 200000,
        reputation: 2,
        etat: "ENCOURS"}, {description:"Bla bla bla",
        id: 2,
        remuneration: 10000,
        delais: 360000,
        reputation: 4,
        etat: "ENCOURS"},{description:"Bla bla bla",
        id: 3,
        remuneration: 10000,
        delais: 360000,
        reputation: 4,
        etat: "ENCOURS"},{description:"Bla bla bla",
        id: 4,
        remuneration: 10000,
        delais: 360000,
        reputation: 4,
        etat: "ENCOURS"},{description:"Bla bla bla",
        id: 5,
        remuneration: 10000,
        delais: 360000,
        reputation: 4,
        etat: "ENCOURS"}, ],
      web3: null,
      accounts: null,
      contract: null,
      userType: "illustrator"
    };
  }

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = MarketPlaceContract.networks[networkId];
      const instance = new web3.eth.Contract(
        MarketPlaceContract.abi,
        deployedNetwork && deployedNetwork.address
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given values by default.
    await contract.methods
      .ajouterDemande(10, 3000, "Logo nouvelle gamme", 4)
      .send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.indexDemande.call();

    // Update state with the result.
    this.setState({ indexDemande: response });

    //For loop to retrieve each demande in an array of objects
    for (let i = 0; i <= this.state.indexDemande; i++) {
      const demande = await contract.methods.getDemandes().call();

      this.setState({
        demandes: [
          ...this.state.demandes,
          {
            description: demande[i].description,
            id: demande[i].id,
            remuneration: demande[i].remuneration,
            delais: demande[i].delais,
            reputation: demande[i].reputation,
            etat: demande[i].etat,
          },
        ],
      });
    }
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }

    const { demandes, userType } = this.state;
    const rows = demandes.sort((a, b) => (a.remuneration < b.remuneration ? -1 : 1));

    /*const createData = (description, id, remuneration, delais, reputation, etat) => {
      return { description, id, remuneration, delais, reputation, etat };
    }
    /*const {description, id, remuneration, delais, reputation, etat } = this.state.demandes[i];
    const rows = [
      for(let i = 0; i <= this.state.indexDemande; i++) {
        return createData(description, id, remuneration, delais, reputation, etat)
      } 
    ];*/
    return (
    <>
    <MainTable demandes={rows} user={userType}/>
    { userType === "illustrator" ? <IllustratorPanel /> : <CompanyPanel />}
    </>
    )
  }
}

export default App;
