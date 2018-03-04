import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import { CurrencyUtils } from 'shared/utils';

const InfoContainer = glamorous.div(
    {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    ({ theme }) => ({
        padding: theme.spacing.unit,
        marginLeft: theme.spacing.unit * 4
    })
);

const NameContainer = glamorous.div(
    {
        fontSize: 18
    },
    ({ theme }) => ({
        color: theme.palette.primary[500]
    })
);

const PriceContainer = glamorous.div({}, ({ theme }) => ({
    marginTop: theme.spacing.unit * 2
}));

export function ItemInfo({ item }) {
    return (
        <InfoContainer>
            <NameContainer>{item.name}</NameContainer>
            <div>by {item.manufacturer}</div>
            <PriceContainer>
                {CurrencyUtils.toString(item.price, 'USD')}
            </PriceContainer>
        </InfoContainer>
    );
}

ItemInfo.propTypes = {
    item: PropTypes.object.isRequired
};
