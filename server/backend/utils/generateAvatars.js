const generateAvatar = (gender, username) => {
    const baseURL = process.env.DICE_BEAR_AVATARS;
    const seed = username
    const genderPrefix = gender === 'female' ? 'female-' : 'male-';
    return `${baseURL}?seed=${genderPrefix}${seed}`;
}

module.exports = generateAvatar;