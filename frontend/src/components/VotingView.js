import React from 'react'
import UpIcon from 'react-icons/lib/fa/caret-up';
import DownIcon from 'react-icons/lib/fa/caret-down';

const VotingView = ({voteScore, onUpVote, onDownVote}) => (
    <table className="text-center">
        <tbody>
        <tr style={{cursor: "pointer"}}>
            <td>
                <UpIcon size={30} color={"#aaa"} onClick={onUpVote}/>
            </td>
        </tr>
        <tr>
            <td>
                <span>
                    {voteScore}
                </span>
            </td>
        </tr>
        <tr style={{cursor: "pointer"}}>
            <td>
                <DownIcon size={30} color={"#aaa"} onClick={onDownVote}/>
            </td>
        </tr>
        </tbody>
    </table>
);

export default VotingView;