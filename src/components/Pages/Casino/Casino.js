import React from "react";
import { Component } from "react";
import './Casino.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Label } from 'semantic-ui-react'
var crypto = require('crypto');

var currentTimeHash = crypto
    .createHash('sha256')
    .update(`${Date.now()}`)
    .digest('hex');

class Casino extends Component {


    handleChange(event) {
        this.setState({ seed: event.target.value });
    }

    updateMultiplier(event) {

        var pct = 100 / event.target.value;
        var odds = (pct - pct * 0.01);

        this.setState({
            multiplier: event.target.value,
            target: ((odds / 100) * 10000)
        });
    }

    updateBet(event) {
        this.setState({ bet: event.target.value });
    }

    randomizeSeed() {
        this.setState({
            seed: crypto
                .createHash('sha256')
                .update(`${Date.now()}`)
                .digest('hex')
        });
    }

    handleBet() {
        //clear error state
        this.setState({ errorMessage: '' });

        //first, check if bet is less than zero
        if (this.state.bet < 0) {
            this.setState({ errorMessage: "bet can't be less than zero" })
        } else if (isNaN(this.state.bet)) {
            this.setState({ errorMessage: "bet is not a number" })
        } else if (this.state.balance - this.state.bet < 0) {
            this.setState({ errorMessage: "insufficient balance!" })
        } else {
            //good to bet now first deduct bet from balance
            var bet = this.state.bet;
            var balance = this.state.balance - bet;

            var timestamp = Date.now();
            var nonce = (Math.random() * 100000).toFixed(0);

            //first hash seed + current time + math.random
            var resultHash = crypto
                .createHash('sha256')
                .update(this.state.seed + '_' + timestamp + '_' + nonce)
                .digest('hex');

            //take first 10 bits of result hash
            resultHash = resultHash.substring(0, 10);

            //convert 10 hex bits to decimal
            var result = parseInt(resultHash, 16);

            //take decimal mod 10,001
            result = result % 10001;

            if (result < this.state.target) {
                //win
                this.setState({
                    resultColor: "green",
                    lastRoll: result,
                    lastTarget: this.state.target,
                    balance: balance + (bet * this.state.multiplier)
                });

                this
                    .state
                    .betHistory
                    .push({
                        result: result,
                        bet: bet,
                        target: this.state.target,
                        winnings: `$${parseFloat((bet * this.state.multiplier)).toFixed(2)}`,
                        timestamp: timestamp,
                        seed: this.state.seed,
                        nonce: nonce
                    });

                //clean up array after 20 bets (to preserve memory)
                if (this.state.betHistory.length > 20) {
                    this.setState({
                        betHistory: this
                            .state
                            .betHistory
                            .slice(1)
                    });
                }
            } else {
                //loss
                this.setState({ resultColor: "red", lastRoll: result, lastTarget: this.state.target, balance: balance });

                this
                    .state
                    .betHistory
                    .push({
                        result: result,
                        bet: bet,
                        target: this.state.target,
                        winnings: `-$${parseFloat(bet).toFixed(2)}`,
                        timestamp: timestamp,
                        seed: this.state.seed,
                        nonce: nonce
                    });

                //clean up array after 20 bets (to preserve memory)
                if (this.state.betHistory.length > 20) {
                    this.setState({
                        betHistory: this
                            .state
                            .betHistory
                            .slice(1)
                    });
                }
            }
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            balance: 1000.00,
            multiplier: 2.00,
            target: 4950,
            bet: 1,

            errorMessage: '',
            lastRoll: '∞',
            lastTarget: '∞',
            resultColor: 'grey',
            betHistory: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.randomizeSeed = this
            .randomizeSeed
            .bind(this);
        this.updateMultiplier = this
            .updateMultiplier
            .bind(this);
        this.updateBet = this.updateBet.bind(this);
    }


    render() {
        return (
            <div className="w-full font-orb">
                <div className="text-center"><h1 className="  py-10 text-5xl">Casino Game</h1></div>
                <div className="grid grid-cols-2">
                    <div className="text-left text-5xl ml-5 ">
                        <div className=" text-left text-3xl ">
                            <div className="balance">Balance: ${this.state.balance.toFixed(2)}</div>
                        </div>
                        <div>
                            <div className=" text-2xl my-5 ">
                                <TextField
                                    disabled
                                    id="outlined-size-small"
                                    label="Seed"
                                    value={this.state.seed}
                                    defaultValue="This will be your seed for the game"
                                    sx={{
                                        width: 600,
                                        maxWidth: '100%'
                                    }}

                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="my-5 flex justify-left">
                                <Button variant="contained" onClick={this.randomizeSeed}>Randomize</Button>
                            </div>
                            <div>
                                <div className="flex bg my-5">
                                    <TextField
                                        id="outlined-number"
                                        label="AMOUNT TO BET!"
                                        type="number"
                                        color="warning"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <div className="h-[55px] border-2 rounded-lg w-[70px] shadow-xl text-center  text-2xl pt-3 bg-slate-600">BNB</div>
                                </div>
                                <div className="flex bg">
                                    <TextField
                                        value={this.state.multiplier}
                                        onChange={this.updateMultiplier}
                                        id="outlined-number"
                                        label="MULTIPLIER"
                                        type="number"
                                        color="warning"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <div className="h-[55px] border-2 rounded-lg w-[50px] shadow-xl text-center  text-2xl pt-2 bg-slate-600" >X</div><Label pointing='left'>{(this.state.target / 100)}
                                        %</Label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Casino;