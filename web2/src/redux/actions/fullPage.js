export const type = 'fullPage';

const fullPage = Boolean => {
    console.log(Boolean);
    return {
        type,
        payload: Boolean
    }
}

export default fullPage
