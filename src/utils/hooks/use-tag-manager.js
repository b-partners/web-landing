const tagManager = (eventName) => {
    window.dataLayer.push({event: 'buttonClick', eventName});
};

export const useTagManager = () => tagManager;
