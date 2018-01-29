import React from 'react';
import Toggle from './Toggle';

const MainList = ({ data, removeTranslation}) => (
		<div>
			{data && <ul className="list-group">
				{[...data.keys()].sort().map(word => (
					<li className="list-group-item" key={word}>
						<div className="row align-items-center justify-content-between">
							<div className="col-auto">
								<div className="word-item">
									<strong className="">{word}</strong>
									<div className="word-item__list lead">
										{[...data.get(word)].map(el => (
											<span
												key={el}
												onDoubleClick={() => {removeTranslation(word, el)}}
											>{el}</span>
										))}
									
									</div>
								
								</div>
							</div>
							<div className="col-auto">
								<Toggle
									word={word}
									translation={data.get(word)}
								/>
							</div>
						</div>
				</li>))}
			</ul>}
		</div>)

export default MainList;