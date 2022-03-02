const express = require('express');
const app = express();
const teams = [
	{
		teamName: 'ABC',
		last5_5: 'L',
		last5_4: 'W',
		last5_3: 'D',
		last5_2: 'W',
		last5_1: 'L',
	},
	{
		teamName: 'BCD',
		last5_5: 'L',
		last5_4: 'L',
		last5_3: 'D',
		last5_2: 'D',
		last5_1: 'W',
	},
	{
		teamName: 'CDE',
		last5_5: 'W',
		last5_4: 'W',
		last5_3: 'D',
		last5_2: 'W',
		last5_1: 'L',
	},
	{
		teamName: 'DEF',
		last5_5: 'L',
		last5_4: 'L',
		last5_3: 'L',
		last5_2: 'L',
		last5_1: 'L',
	},
	{
		teamName: 'EFG',
		last5_5: 'D',
		last5_4: 'W',
		last5_3: 'W',
		last5_2: 'W',
		last5_1: 'W',
	},
	{
		teamName: 'FGH',
		last5_5: 'L',
		last5_4: 'W',
		last5_3: 'L',
		last5_2: 'D',
		last5_1: 'W',
	},
	{
		teamName: 'GHI',
		last5_5: 'D',
		last5_4: 'W',
		last5_3: 'D',
		last5_2: 'L',
		last5_1: 'D',
	},
	{
		teamName: 'HIJ',
		last5_5: 'L',
		last5_4: 'W',
		last5_3: 'D',
		last5_2: 'L',
		last5_1: 'D',
	},
	{
		teamName: 'IJK',
		last5_5: 'W',
		last5_4: 'L',
		last5_3: 'W',
		last5_2: 'W',
		last5_1: 'W',
	},
	{
		teamName: 'JKL',
		last5_5: 'D',
		last5_4: 'W',
		last5_3: 'L',
		last5_2: 'D',
		last5_1: 'D',
	},
	{
		teamName: 'KLM',
		last5_5: 'D',
		last5_4: 'D',
		last5_3: 'L',
		last5_2: 'L',
		last5_1: 'W',
	},
	{
		teamName: 'LMN',
		last5_5: 'L',
		last5_4: 'L',
		last5_3: 'L',
		last5_2: 'D',
		last5_1: 'L',
	},
	{
		teamName: 'MNO',
		last5_5: 'L',
		last5_4: 'D',
		last5_3: 'D',
		last5_2: 'W',
		last5_1: 'D',
	},
	{
		teamName: 'NOP',
		last5_5: 'W',
		last5_4: 'D',
		last5_3: 'W',
		last5_2: 'D',
		last5_1: 'L',
	},
];
const players = [
	{
		playerID: 'ZXC',
		playTime: 405,
		scored: 6,
	},
	{
		playerID: 'XCV',
		playTime: 631,
		scored: 2,
	},
	{
		playerID: 'CVB',
		playTime: 1077,
		scored: 1,
	},
	{
		playerID: 'VBN',
		playTime: 650,
		scored: 0,
	},
	{
		playerID: 'BNM',
		playTime: 900,
		scored: 10,
	},
];

const posts = [
	{
		_id: 'd3301ba3-004d-4a44-91ab-625d8db22e4a',
		userID: 'eLCmA2EH3thFoUPGcN1YH7AHSZp2',
		eventID: '',
		type: 'image',
		textFirst: '',
		textSecond: '',
		text: 'NFT for sale',
		captureFileURL:
			'https://api.solissol.com/api/v1/en/media-upload/mediaFiles/posts/eLCmA2EH3thFoUPGcN1YH7AHSZp2_1646124148027581/112378694016cb368d2e5ddf5cddced0.png',
		hyperLink: '',
		hyperlinkTextFirst: '',
		hyperlinkTextSecond: '',
		hyperlinkCaptureFileURL: '',
		taggedUsers: [],
		path: 'mediaFiles/TT_Panel/posts/eLCmA2EH3thFoUPGcN1YH7AHSZp2_1646124148027581/compressed/112378694016cb368d2e5ddf5cddced0.png',
		viewsCount: 0,
		commentsCount: 5,
		reactionCount: 1,
		repostCount: 0,
		thumbnail: '',
		thumbnailPath: '',
		thumbnailURL: '',
		repostCheck: false,
		reportStatus: false,
		approveForClub: true,
		postedTo: 'Club',
		deletedCheck: false,
		pinPost: false,
		backgroundColorHex: '#ffffff',
		storyCheck: false,
		storyTime: 0,
		storyViewsCount: 0,
		blurHash: 'ULMQ*Q~XWZt7~VM}jZj[n#t7Rjj[awj[ayj]',
		media: [
			{
				type: 'image',
				captureFileURL:
					'https://api.solissol.com/api/v1/en/media-upload/mediaFiles/posts/eLCmA2EH3thFoUPGcN1YH7AHSZp2_1646124148027581/112378694016cb368d2e5ddf5cddced0.png',
				path: 'mediaFiles/TT_Panel/posts/eLCmA2EH3thFoUPGcN1YH7AHSZp2_1646124148027581/compressed/112378694016cb368d2e5ddf5cddced0.png',
				thumbnailURL: '',
				thumbnailPath: '',
				blurHash: 'ULMQ*Q~XWZt7~VM}jZj[n#t7Rjj[awj[ayj]',
				backgroundColorHex: '#c8c8ce',
			},
		],
		topReactions: [
			{
				profilePicURL:
					'https://api.solissol.com/api/v1/en/media-upload/mediaFiles/profilepics/eLCmA2EH3thFoUPGcN1YH7AHSZp2_1640670827657258/a6966d6d8d27da6bcb90391054d2d6aca.jpg',
				id: 'eLCmA2EH3thFoUPGcN1YH7AHSZp2',
			},
		],
		dynamicUrl: 'https://solissolution.page.link/S8csLvv39xvN9Z9P6',
		postedDate: {
			$date: '2022-03-01T08:42:46.372Z',
		},
		createdAt: {
			$date: '2022-03-01T08:42:46.388Z',
		},
		updatedAt: {
			$date: '2022-03-02T08:03:11.723Z',
		},
		__v: 0,
	},
];
const comments = [
	{
		_id: '621deebb4c13a25f5325914e',
		taggedUsers: [],
		reactionCount: 0,
		deletedCheck: false,
		userID: 'eLCmA2EH3thFoUPGcN1YH7AHSZp2',
		postID: 'd3301ba3-004d-4a44-91ab-625d8db22e4a',
		commentText: 'kg i ',
		type: '',
		textFirst: '',
		textSecond: '',
		captureFileURL: '',
		hyperLink: '',
		commentedDate: {
			$date: '2022-03-01T10:00:27.683Z',
		},
		createdAt: {
			$date: '2022-03-01T10:00:27.684Z',
		},
		updatedAt: {
			$date: '2022-03-01T10:00:27.684Z',
		},
		__v: 0,
	},
	{
		_id: '621deff9de20915f45beaf1f',
		taggedUsers: [],
		reactionCount: 0,
		deletedCheck: false,
		userID: 'eLCmA2EH3thFoUPGcN1YH7AHSZp2',
		postID: 'd3301ba3-004d-4a44-91ab-625d8db22e4a',
		commentText: 'paisy?',
		type: '',
		textFirst: '',
		textSecond: '',
		captureFileURL: '',
		hyperLink: '',
		commentedDate: {
			$date: '2022-03-01T10:05:45.507Z',
		},
		createdAt: {
			$date: '2022-03-01T10:05:45.510Z',
		},
		updatedAt: {
			$date: '2022-03-01T10:05:45.510Z',
		},
		__v: 0,
	},
	{
		_id: '621e05cf654b175f2c81d308',
		taggedUsers: [],
		reactionCount: 0,
		deletedCheck: false,
		userID: 'eLCmA2EH3thFoUPGcN1YH7AHSZp2',
		postID: 'd3301ba3-004d-4a44-91ab-625d8db22e4a',
		commentText: 'ggg',
		type: '',
		textFirst: '',
		textSecond: '',
		captureFileURL: '',
		hyperLink: '',
		commentedDate: {
			$date: '2022-03-01T11:38:55.064Z',
		},
		createdAt: {
			$date: '2022-03-01T11:38:55.064Z',
		},
		updatedAt: {
			$date: '2022-03-01T11:38:55.064Z',
		},
		__v: 0,
	},
	{
		_id: '621f24b13adab0d9029fd6ce',
		taggedUsers: [],
		reactionCount: 0,
		deletedCheck: true,
		userID: '2aRSIZZnd8YMSNTufkUAtYftbn72',
		postID: 'd3301ba3-004d-4a44-91ab-625d8db22e4a',
		commentText: 'test commnet 1',
		type: '',
		textFirst: '',
		textSecond: '',
		captureFileURL: '',
		hyperLink: '',
		commentedDate: {
			$date: '2022-03-02T08:02:57.457Z',
		},
		createdAt: {
			$date: '2022-03-02T08:02:57.460Z',
		},
		updatedAt: {
			$date: '2022-03-02T08:03:11.727Z',
		},
		__v: 0,
	},
	{
		_id: '621f24b685c9e4d8c4ad1c39',
		taggedUsers: [],
		reactionCount: 0,
		deletedCheck: false,
		userID: '2aRSIZZnd8YMSNTufkUAtYftbn72',
		postID: 'd3301ba3-004d-4a44-91ab-625d8db22e4a',
		commentText: 'test comment 2',
		type: '',
		textFirst: '',
		textSecond: '',
		captureFileURL: '',
		hyperLink: '',
		commentedDate: {
			$date: '2022-03-02T08:03:02.958Z',
		},
		createdAt: {
			$date: '2022-03-02T08:03:02.959Z',
		},
		updatedAt: {
			$date: '2022-03-02T08:03:02.959Z',
		},
		__v: 0,
	},
	{
		_id: '621f24bdd4f9ead90921652c',
		taggedUsers: [],
		reactionCount: 0,
		deletedCheck: false,
		userID: '2aRSIZZnd8YMSNTufkUAtYftbn72',
		postID: 'd3301ba3-004d-4a44-91ab-625d8db22e4a',
		commentText: 'test comment 3',
		type: '',
		textFirst: '',
		textSecond: '',
		captureFileURL: '',
		hyperLink: '',
		commentedDate: {
			$date: '2022-03-02T08:03:09.353Z',
		},
		createdAt: {
			$date: '2022-03-02T08:03:09.355Z',
		},
		updatedAt: {
			$date: '2022-03-02T08:03:09.355Z',
		},
		__v: 0,
	},
];

//Question NO 1

function sortByWins() {
	const newSort = teams.sort((a, b) => {
        if (a.last5_5.startsWith('W') && b.last5_5.startsWith('L')) {
            return -1;
        } else if (!a.last5_5.startsWith('W') && b.last5_5.startsWith('W')) {
            return 1;
        }
		if (a.last5_4.startsWith('W') && b.last5_4.startsWith('L')) {
			return -1;
		} else if (!a.last5_4.startsWith('W') && b.last5_4.startsWith('W')) {
			return 1;
		}
		if (a.last5_3.startsWith('W') && b.last5_3.startsWith('L')) {
			return -1;
		} else if (!a.last5_3.startsWith('W') && b.last5_3.startsWith('W')) {
			return 1;
		}

		if (a.last5_2.startsWith('W') && b.last5_2.startsWith('L')) {
			return -1;
		} else if (!a.last5_2.startsWith('W') && b.last5_2.startsWith('W')) {
			return 1;
		}

		if (a.last5_1.startsWith('W') && b.last5_1.startsWith('L')) {
			return -1;
		} else if (!a.last5_1.startsWith('W') && b.last5_1.startsWith('W')) {
			return 1;
		}
		// if (a.last5_5.startsWith('L') && !b.last5_5.startsWith('L')) {
		// 	return 1;
		// } else if (!a.last5_5.startsWith('L') && b.last5_5.startsWith('L')) {
		// 	return -1;
		// }
		// if (a.last5_4.startsWith('L') && !b.last5_4.startsWith('L')) {
		// 	return 1;
		// } else if (!a.last5_4.startsWith('L') && b.last5_4.startsWith('L')) {
		// 	return -1;
		// }
		// if (a.last5_3.startsWith('L') && !b.last5_3.startsWith('L')) {
		// 	return 1;
		// } else if (!a.last5_3.startsWith('L') && b.last5_3.startsWith('L')) {
		// 	return -1;
		// }

		// if (a.last5_2.startsWith('L') && !b.last5_2.startsWith('L')) {
		// 	return 1;
		// } else if (!a.last5_2.startsWith('L') && b.last5_2.startsWith('L')) {
		// 	return -1;
		// }

		// if (a.last5_1.startsWith('L') && !b.last5_1.startsWith('L')) {
		// 	return 1;
		// } else if (!a.last5_1.startsWith('L') && b.last5_1.startsWith('L')) {
		// 	return -1;
		// }

		// if (a.last5_1 > b.last5_1) return -1;
		// if (a.last5_2 < b.last5_2) return 1;
		// if (a.last5_2 > b.last5_2) return -1;
		// if (a.last5_3 < b.last5_3) return 1;
		// if (a.last5_3 > b.last5_3) return -1;
		// if (a.last5_4 < b.last5_4) return 1;
		// if (a.last5_4 > b.last5_4) return -1;
		// if (a.last5_5 < b.last5_5) return 1;
		// if (a.last5_5 > b.last5_5) return -1;
	});
	return newSort;
}
const ourNewArray = sortByWins();
let ourResult = [];
for (let i = 0; i < ourNewArray.length; i++) {
	ourResult.push({ position: i + 1, teamName: ourNewArray[i].teamName });
}

console.log(ourResult);

//Question No 2
function minimumPlayTimeWithHighestGoalScored() {
	const newArray = players.sort((a, b) => {
		return a.playTime / a.scored - b.playTime / b.scored;
	});
	return newArray[0];
}
const result = minimumPlayTimeWithHighestGoalScored();
console.log('Minimum played time with most goals scored', result);

//Question No 3

function reverse(num) {
	let value = 24;
	return value / num;
}

const ourOwn = reverse(8);
console.log(ourOwn);

//Question No 4 Query Data
const allQuery = Post.aggregate([
	{ $match: { deletedCheck: false } },
	{
		$lookup: {
			from: 'comments',
			pipeline: [{ $match: { deletedCheck: false } }],
			as: 'comments',
		},
	},
]).exec();

//Question No 5

function filterData(name = null, type = null, groupId = null) {
	const data = nfts.find({
		name: new RegExp(name, 'i'),
	});
	if (type) {
		data = data.filter(dt => dt.type === type);
	}
	if (groupId) {
		data = data.filter(dt => dt.groupId === groupId);
	}
	return data;
}
filterData('uja vs levski', 'Ticket', '618a106762fc3e0d6769881d');

app.listen(5000, () => {
	console.log('Server is running');
});
