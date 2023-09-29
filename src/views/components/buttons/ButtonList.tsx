import { Button } from './Button'

import './buttons.scss';

export const ButtonList = () => {
    let qualities = [
        '360p',
        '720p',
        'HD',
        'Full HD',
        '4k'
    ]
    return (
        <div className="btn__wrapper">
            {qualities.map((item, i) =>
                <Button quality={item} key={i} />
            )}
        </div>
    )
}