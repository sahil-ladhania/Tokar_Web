import axios from "axios";

const API_ENDPOINT = 'http://localhost:3000/api/game';

export const createGameSession = async({ numberOfPlayers, choseTokenColor }) => {
    try {
        const response = await axios.post(`${API_ENDPOINT}/mode/computer` ,
            { numberOfPlayers, choseTokenColor },
            {
                withCredentials : true
            }
        );
        return response;
    }
    catch (error) {
        throw new Error("Error Creating Game Session" , error.message);
    }
}