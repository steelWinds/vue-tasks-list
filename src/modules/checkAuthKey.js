let checkAuthKey = (authKey, logic = false) => {
    if (window.localStorage.getItem(authKey) === null) {
        if (logic === false) {
            return {name: 'authorization'};
        }

        return false;
    }

    return true;
};

export { checkAuthKey };
