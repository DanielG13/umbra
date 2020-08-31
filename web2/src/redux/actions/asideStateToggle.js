export const type = 'asideStateToggle';

const asideStateToggle = (Boolean = null) => {
    console.log(Boolean);
    return {
        type,
        payload: Boolean
    }
}

export default asideStateToggle
