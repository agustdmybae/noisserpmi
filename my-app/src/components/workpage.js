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
            content: 'In computing, a keyboard is a typewriter-style device that uses an arrangement of buttons or keys to act as mechanical levers or electronic switches. Following the decline of punch cards and paper tape, interaction via teleprinter-style keyboards became the main input method for computers.'
        },
        {
            workId: 3,
            title: 'record',
            content: 'A computer monitor is an output device that displays information in pictorial form. A monitor usually comprises a visual display, circuitry, casing, and power supply. The display device in modern monitors is typically a thin film transistor liquid crystal display (TFT-LCD) with LED backlighting.'
        },
        {
            workId: 4,
            title: 'gum',
            content: 'A headset combines a headphone with a microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo). Headsets provide the equivalent functionality of a telephone handset but with hands-free operation.'
        }
    ]
    return (
        works.map((work) => (
            <Work workId={work.workId} title={work.title} content={work.content}/>
        ))
    )
}