import React, { Component } from "react";
import { Bar } from "./popoverui";
import Popover from "react-text-selection-popover";

export default class Highlight extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.refParagraph = React.createRef();
        //this.ToggleButton = this.ToggleButton.bind(this);
        this.saveSelection = this.saveSelection.bind(this);
      }


   
      saveSelection = () => {
        var range, sel;
        if (window.getSelection) {
            // Non-IE case
            sel = window.getSelection();
            if (sel.getRangeAt) {
                range = sel.getRangeAt(0);
            }
            document.designMode = "on";
            if (range) {
                sel.removeAllRanges();
                sel.addRange(range);
            }
            document.execCommand("underline", false, null);
            document.designMode = "off";
        } else if (document.selection && document.selection.createRange &&
                document.selection.type != "None") {
            // IE case
            range = document.selection.createRange();
            range.execCommand("underline", false, null);

        }
      }
      render() {
        return (
        <div>

        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <span className="row highlight justify-content-end">-</span>
              <span className="row highlight justify-content-end">-</span>
              <span className="row highlight justify-content-end">-</span>
              <span className="row highlight justify-content-end">-</span>
              <span className="row highlight justify-content-end">line 5</span>
              <span className="row highlight justify-content-end">-</span>
              <span className="row highlight justify-content-end">-</span>
              <span className="row highlight justify-content-end">-</span>
              <span className="row highlight justify-content-end">-</span>
              <span className="row highlight justify-content-end">line 10</span>
              <span className="row highlight justify-content-end">-</span>
              <span className="row highlight justify-content-end">-</span>
              <span className="row highlight justify-content-end">-</span>
              <span className="row highlight justify-content-end">-</span>
              <span className="row highlight justify-content-end">line 15</span>
              <span className="row highlight justify-content-end">-</span>
              <span className="row highlight justify-content-end">-</span>
              <span className="row highlight justify-content-end">-</span>
              <span className="row highlight justify-content-end">-</span>
              <span className="row highlight justify-content-end">line 20</span>
              <span className="row highlight justify-content-end">-</span>
              <span className="row highlight justify-content-end">-</span>
              <span className="row highlight justify-content-end">-</span>
              <span className="row highlight justify-content-end">-</span>
              <span className="row highlight justify-content-end">line 25</span>
              <span className="row highlight justify-content-end">-</span>
            </div>
            <div className="col-sm-8">
              <span className="row highlight">Mr Holohan, assistant secretary of the Eire</span>
              <span className="row highlight">Abu Society, had been walking up and down</span>
              <span className="row highlight">Dublin for nearly a month, with his hands and</span>
              <span className="row highlight">pockets full of dirty pieces of paper, arranging</span>
              <span className="row highlight">about the series of concerts. He had a game</span>
              <span className="row highlight">leg and for this his friends called him Hoppy</span>
              <span className="row highlight">Holohan. He walked up and down constantly,</span>
              <span className="row highlight">stood by the hour at street corners arguing</span>
              <span className="row highlight">the point and made notes; but in the end it</span>
              <span className="row highlight">was Mrs Kearney who arranged everything</span>
              <span className="row highlight">Miss Devlin had become Mrs Kearney out</span>
              <span className="row highlight">of spite. She had been educated in a</span>
              <span className="row highlight">high-class convent, where she had learned</span>
              <span className="row highlight">French and music. As she was naturally pale</span>
              <span className="row highlight">and unbending in manner she made few</span>
              <span className="row highlight">friends at school. When she came to the age</span>
              <span className="row highlight">of marriage she was sent out to many houses</span>
              <span className="row highlight">where her playing and ivory manners were</span>
              <span className="row highlight">much admired. She sat amid the chilly circle</span>
              <span className="row highlight">of her accomplishments, waiting for some</span>
              <span className="row highlight">suitor to brave it and oer her a brilliant life.</span>
              <span className="row highlight">But the young men whom she met were Kathleen, to a good convent, where she</span>
              <span className="row highlight">learned French and music, and aerward paid</span>
              <span className="row highlight">her fees at the Academy. Every year in the</span>
              <span className="row highlight">month of July Mrs Kearney found occasion to</span>
              <span className="row highlight">say to some friend:</span>
            </div>
          </div>
        </div>

        <Popover selectionRef={this.refParagraph} >
        <Bar bg="yellow">
          <div onClick ={ this.saveSelection} >
          <p>
          Highlight
          </p>
          </div>
        </Bar>
        </Popover>

        </div>
        )
      }
    
}
