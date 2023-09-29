import * as React from "react";

import { ButtonList } from '../components/buttons/ButtonList';
import { DescriptionList } from '../components/descriptions/DescriptionList';

import './index.scss';

export const App: React.FC = (): JSX.Element => {
    
    return (
        <article className="article">
            <div className="article__player">
                <span className="article__player--text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum numquam expedita aliquam quam reprehenderit suscipit amet vitae, nobis dolore!
                </span>
                <ButtonList />
            </div>
            <DescriptionList />
        </article>
    )
}