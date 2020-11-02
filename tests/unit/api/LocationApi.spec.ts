
import LocationApi from '@/api/LocationApi';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('LocationApi', () => {
    describe('getLocations', () => {
        it('Calls the GET method as expected', async () => {
            const resp = { data: [{ id: 1 }] };

            mockedAxios.get.mockResolvedValue(resp);

            const result = await LocationApi.getLocations();

            expect(mockedAxios.get).toHaveBeenCalled();
            expect(result).toBe(resp);
        })
    })
})

