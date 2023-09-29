import { Description } from './Description'

import './descriptions.scss';

export const DescriptionList = () => {
    let qualities = [
        {
            num: 1,
            str: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum numquam expedita aliquam'
        },
        {
            num: 2,
            str: 'adipisicing elit. Rerum numquam expedita aliquam'
        },
        {
            num: 3,
            str: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum numquam expedita aliquam'
        },
    ]

    return (
        <div className="item__wrapper">
            {qualities.map((item, i) =>
                <Description descr={item} key={i} />
            )}
        </div>
    )
}