import React, { useState, useEffect } from 'react';
import { Tag } from 'antd';
import styled from 'styled-components';
import { Select } from '@mierak/react-select-virtualized';
import { connect } from 'react-redux';
import { statsFiltersSelector } from 'store/reducers/rootReducer';
import { setStat } from 'store/actions/actions';
import './autocomplete.css';
const Label = styled.div``;
const StyledTag = styled(Tag)`
	/* transform: scale(0.85); */
	margin-top: 1px;
`;
const customStyles = {
	container: provided => ({
		...provided,
		display: 'inline-block',
		width: '100%',
		minHeight: '1px',
		textAlign: 'left',
		border: 'none'
	}),
	control: (provided, { data, isDisabled, isFocused, isSelected }) => ({
		...provided,
		border: '1px solid #191c1e',
		borderRadius: '4px',
		minHeight: '1px',
		height: '32px',
		backgroundColor: '#454d54',
		boxShadow: 0,
		transition: 'border-color 0.15s linear',
		'&:hover': {
			borderColor: '#26547c'
		},
		'&:active': {
			borderColor: '#26547c'
		},
		'&:focused': {
			borderColor: '#26547c'
		}
	}),
	input: provided => ({
		...provided,
		minHeight: '1px',
		color: '#bfbfbf',
		maringBottom: '5px'
	}),
	dropdownIndicator: provided => ({
		...provided,
		color: '#bfbfbf'
		// marginTop: '-3px'
		// height: '23px'
	}),
	indicatorSeparator: provided => ({
		...provided,
		minHeight: '1px',
		// height: '16px',
		backgroundColor: '#bfbfbf',
		marginTop: '4px',
		height: '22px'
		// marginTop: '3px'
	}),
	clearIndicator: provided => ({
		...provided,
		// height: '12px',
		// marginTop: '-21px',
		color: '#bfbfbf',
		paddingBottom: '-20px'
	}),
	valueContainer: provided => ({
		...provided,
		minHeight: '1px',
		// height: '23px',
		paddingTop: '0',
		paddingBottom: '0'
	}),
	singleValue: provided => ({
		...provided,
		minHeight: '1px',
		marginTop: '-2px',
		// height: '23px',
		color: '#ddd'
	}),
	indicatorsContainer: provided => ({
		...provided,
		minHeight: '1px',
		height: '32px'
	}),
	menu: provided => ({
		...provided,
		backgroundColor: '#454d54'
	}),
	placeholder: provided => ({
		...provided,
		color: '#bfbfbf',
		top: '42%'
	})
};
const tagColors = {
	Implicit: '#65611e',
	Enchant: '#8b579c',
	Crafted: '#0060bf',
	Veiled: '#545c63',
	Delve: '#ad641b',
	Fractured: '#a29162',
	Pseudo: '#87d068'
};
let stats = require('../../../assets/stats.json');
const data = [];
stats.result.forEach(group => {
	group.entries.forEach(entry => {
		data.push({
			label: entry.text,
			value: entry.id,
			tag: group.label
		});
	});
});
const StatsAutoComplete = React.memo(({ id, value, setValue }) => {
	const formatOptionLabel = (option, context) => {
		let color;
		if (tagColors.hasOwnProperty(option.tag)) {
			color = tagColors[option.tag];
		} else {
			color = 'darkgrey';
		}
		return (
			<Label>
				<StyledTag color={color}>{option.tag}</StyledTag>
				{option.label}
			</Label>
		);
	};

	function handleChange(e) {
		setValue(id, e.value || '');
	}
	return (
		<div>
			<Select
				isClearable={false}
				options={data}
				formatOptionLabel={formatOptionLabel}
				styles={customStyles}
				onChange={handleChange}
				value={data.filter(option => option.value === value)[0]}
				// style={{ marginTop: '-5px' }}
			/>
		</div>
	);
});

const mapStateToProps = (state, ownProps) => {
	const selector = statsFiltersSelector(state);
	return {
		value: selector.statFilters[ownProps.id].id
	};
};
const mapDispatchToProps = dispatch => {
	return {
		setValue: (filterIndex, value) => dispatch(setStat(filterIndex, value))
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StatsAutoComplete);
