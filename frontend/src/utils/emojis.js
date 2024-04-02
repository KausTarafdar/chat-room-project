export const catEmojis = [
    "😼",
    "😹",
    "🙀",
    "😾", 
    "😿",
    "😻", 
    "😺",
    "😸", 
    "😽"
]

export const getRandomEmoji = () => {
    return catEmojis[Math.floor(Math.random() * catEmojis.length)]
}