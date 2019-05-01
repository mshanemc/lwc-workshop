const getTomorrow = () => {
    let tomorrow = new Date().setDate(new Date().getDate()+1);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return `${days[new Date(tomorrow).getDay()]}, ${new Date(tomorrow).getMonth() +1}/${new Date(tomorrow).getDate()}`;
}

export { getTomorrow };