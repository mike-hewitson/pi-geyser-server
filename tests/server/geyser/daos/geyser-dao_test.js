import mongoose from 'mongoose';
import GeyserDAO from '../../../../server/api/geyser/dao/geyser-dao';
import {expect} from 'chai';
import {setupMongoose, createTodos} from '../../_helpers/db';

describe('geyser.dao', () => {
    before(() => {
        setupMongoose(mongoose);
    });

    afterEach((done) => {
        GeyserDAO.remove({}, () => done());
    })

    // afterEach((done) => {
    //     done();
    // })

    describe('getAllTemperatures', () => {
        // beforeEach((done) => {
        //     createTodos()
        //     .then(() => done())
        //     .catch(() => done());
        // })

        it('should get all temperatures', (done) => {
            let _onSuccess = temperatures => {
              // console.log('i am here', temperatures);
                expect(temperatures).to.be.defined;
                expect(temperatures[0]).to.have.property('name').and.to.equal('Geyser one');
                expect(temperatures[0]).to.have.property('temperature').and.to.equal(59.1);
                expect(temperatures[1]).to.have.property('name').and.to.equal('Geyser two');
                expect(temperatures[1]).to.have.property('temperature').and.to.equal(48.2);
                done();
            }

            let _onError = (err) => {
              // console.log('i am there');
                expect(true).to.be.false; // should not come here

                // done();
            }

            GeyserDAO
              .getAllTemperatures()
              .then(_onSuccess)
              .catch(_onError);
        })
    })

    describe('getOneTemperature', () => {
        // beforeEach((done) => {
        //     createTodos()
        //     .then(() => done())
        //     .catch(() => done());
        // })

        it('should get one temperature', (done) => {
            let _onSuccess = temperature => {
              // console.log('i am here', temperature);
                expect(temperature).to.be.defined;
                expect(temperature).to.have.property('name').and.to.equal('Geyser one');
                expect(temperature).to.have.property('temperature').and.to.equal(59.1);
                done();
            }

            let _onError = (err) => {
              // console.log('i am there');
                expect(true).to.be.false; // should not come here

                // done();
            }

            GeyserDAO
              .getOneTemperature('Geyser One')
              .then(_onSuccess)
              .catch(_onError);
        })
    })

    describe('getAllRelays', () => {
        // beforeEach((done) => {
        //     createTodos()
        //     .then(() => done())
        //     .catch(() => done());
        // })

        it('should get all relays', (done) => {
            let _onSuccess = relays => {
              // console.log('i am here', temperatures);
                expect(relays).to.be.defined;
                expect(relays[0]).to.have.property('name').and.to.equal('Geyser one');
                expect(relays[0]).to.have.property('state').and.to.equal(true);
                expect(relays[1]).to.have.property('name').and.to.equal('Geyser two');
                expect(relays[1]).to.have.property('state').and.to.equal(false);
                done();
            }

            let _onError = (err) => {
              // console.log('i am there');
                expect(true).to.be.false; // should not come here

                // done();
            }

            GeyserDAO
              .getAllRelays()
              .then(_onSuccess)
              .catch(_onError);
        })
    })

    describe('getOneRelay', () => {
        // beforeEach((done) => {
        //     createTodos()
        //     .then(() => done())
        //     .catch(() => done());
        // })

        it('should get one relay', (done) => {
            let _onSuccess = relay => {
              // console.log('i am here', relay);
                expect(relay).to.be.defined;
                expect(relay).to.have.property('name').and.to.equal('Geyser one');
                expect(relay).to.have.property('state').and.to.equal(true);
                done();
            }

            let _onError = (err) => {
              // console.log('i am there');
                expect(true).to.be.false; // should not come here

                // done();
            }

            GeyserDAO
              .getOneRelay('Geyser One')
              .then(_onSuccess)
              .catch(_onError);
        })
    })
})
