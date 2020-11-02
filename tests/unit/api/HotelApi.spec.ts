
import HotelApi from '@/api/HotelApi';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('HotelApi', () => {
    describe('getHotels', () => {
        it('Calls the GET method as expected', async () => {
            const resp = { data: [{ id: 1 }] };

            mockedAxios.get.mockResolvedValue(resp);

            const result = await HotelApi.getHotels('test');

            expect(mockedAxios.get).toHaveBeenCalled();
            expect(result).toBe(resp);
        })
    })
    describe('getHotel', () => {
        it('Calls the GET method as expected', async () => {
            const resp = { data: [{ id: 1 }] };

            mockedAxios.get.mockResolvedValue(resp);

            const result = await HotelApi.getHotel('test');

            expect(mockedAxios.get).toHaveBeenCalled();
            expect(result).toBe(resp);
        })
    })
})

