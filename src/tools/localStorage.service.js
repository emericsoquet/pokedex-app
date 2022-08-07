// chercher dans le cache local avec loadState

export const loadState = () => {
    // si l'utilisateur bloque le cache, la fonction peut planter donc on insère un try + catch
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (error) {
      console.log('ERROR:', error);
    }
}

// enregistre dans le cache local avec saveState
export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      // setItem pour mettre à jour le cache de state (ou en créer un nouveau)
      localStorage.setItem('state', serializedState);
    } catch (error) {
        console.log('ERROR:', error);
    }
}


