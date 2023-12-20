import axios from "axios";

export const requestPage = async (url) => {
    if (!url) url = "";
    
    try {
        const response = await axios.get(`http://localhost:8000/api/${url}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const requestPoet = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8000/api/language/poets`, {
            params: {id : id}
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const requestRecipe = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8000/api/cuisine/recipes`, {
            params: {id : id}
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const requestMyth = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8000/api/customs/myths`, {
            params: {id : id}
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};