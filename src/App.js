import React, { useState } from 'react';

import './App.css';

function App() {
	const people = [
		{ name: 'Pepe Biyuela', number: '965752111225', id: 1 },
		{ name: 'Aitor Menta', number: '3214578965412', id: 2 },
		{ name: 'Armando Jaleo', number: '0123456789', id: 3 },
		{ name: 'Jhony Melavo', number: '9876543210', id: 4 },
	];

	const [search, setNewSearch] = useState('');

	const handleSearchChange = (e) => {
		setNewSearch(e.target.value);
	};

	const filtered = !search
		? people
		: people.filter((person) =>
				person.name.toLowerCase().includes(search.toLowerCase())
		  );

	return (
		<>
			<h2>Phone book</h2>
			Filter persons:{' '}
			<input type="text" value={search} onChange={handleSearchChange} />
			<h2>Numbers</h2>
			{filtered.map((person) => {
				return (
					<p key={person.id}>
						{person.name} - {person.number}
					</p>
				);
			})}
		</>
	);
}

export default App;
