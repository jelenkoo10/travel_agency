const getSessionFromStorage = () => {
    try {
        const session = localStorage.getItem("User");
        return session ? JSON.parse(session) : null;
    } catch (error) {
        console.log(
            "🚀 ~ file: SessionService.js ~ getSessionFromStorage ~ error",
            error
        );
    }
};

const saveSession = (user) => {
    try {
        if (user) {
            localStorage.setItem("User", JSON.stringify(user));
        }
    } catch (error) {
        console.log(
            "🚀 ~ file: SessionService.js ~ saveSession ~ error",
            error
        );
    }
};

const getProfile = () => {
    try {
        const user = localStorage.getItem("User");
        return user ? JSON.parse(user) : null;
    } catch (error) {
        console.log("🚀 ~ file: SessionService.js ~ getProfile ~ error", error);
    }
};

export const SessionService = {
    getSessionFromStorage,
    saveSession,
    getProfile,
};
