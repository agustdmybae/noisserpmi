import Work from "./work"

export default function Workpage() {
    const works = [
        {
            workId: 1,
            title: 'mouse',
            content: 'A computer mouse is a hand-held pointing device that detects two-dimensional motion relative to a surface. Touchpads and smartphone screens are used as a substitute for a mouse where desk space is scarce, which are more convenient.'
        },
        {
            workId: 2,
            title: 'car',
            content: 'A toy car is a miniature representation of an automobile, such as a sedan, bus, or convertible. The miniature vehicles were aimed at children as playthings. Now, kids are addicted to various mobile games. They move virtual vehicles with taps instead of push and pull.'
        },
        {
            workId: 3,
            title: 'record',
            content: 'A vinyl record is an analog sound storage medium in the form of a flat disc with an inscribed, modulated spiral groove. In the past, people played music with vinyl records. However, with the invention of mp3 players and smartphones, vinyl records were replaced by music apps.'
        },
        {
            workId: 4,
            title: 'gum',
            content: 'Bubble gum is designed to be inflated out of the mouth as a bubble. Invented by an accountant in 1928, bubble gum became highly successful and popular worldwide with its sweet flavors and entertainment. It is a fine childhood memory for many people.'
        }
    ]
    return (
        works.map((work) => (
            <Work workId={work.workId} title={work.title} content={work.content}/>
        ))
    )
}