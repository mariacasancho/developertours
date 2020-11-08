import store from '@/store'

describe('LocationStore', () => {
    describe('LocationModule', () => {
        //unfortunately I haven't archived a proper mock of the store 
        //where I can test actions and mutations and I am still unsure
        //about how the store should be tested.
        it('store should have Locations Module', () => {
            expect(store.hasModule('Locations')).toEqual(true);
        })
    })
})