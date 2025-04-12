import React from 'react';
import clsx from 'clsx';

export const Form = ({ onSubmit, enctype, children}: { onSubmit: React.FormEventHandler<HTMLFormElement>, enctype?: boolean, children: React.ReactNode }) => {
    return (
        <form onSubmit={onSubmit} encType={enctype ? "multipart/form-data" : ""} className="w-full flex flex-col gap-4">
            {children}
        </form>
    );
};

export const FormSplit = ({ children }: { children: React.ReactNode }) => {
    const childCount = React.Children.count(children);

    let gridTemplate;
    switch (childCount) {
        case 2:
            gridTemplate = 'grid-cols-1 sm:grid-cols-2';
            break;
        case 3:
            gridTemplate = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
            break;
        case 4:
            gridTemplate = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'; 
            break;
        default:
            gridTemplate = 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
    }

    return (
        <div className={clsx('w-full grid gap-4', gridTemplate)}>
            {children}
        </div>
    );
};