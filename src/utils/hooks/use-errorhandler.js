const handleError = (errorMessage) => {
    try {
        const { message } = JSON.parse(errorMessage);
        return message;
    } catch {
        return errorMessage;
    }
};

export const useHandleError = () => handleError;
