import axios from "axios";

export const requestPage = async (url) => {
    if (!url) url = "";
    
    try {
        const response = await axios.get(`http://localhost:8000/${url}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const requestPoet = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8000/language/poets`, {
            params: {id : id}
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const requestRecipe = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8000/cuisine/recipes`, {
            params: {id : id}
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};