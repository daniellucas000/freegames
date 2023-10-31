import { CardContent, Skeleton, Box } from '@mui/material';
import { InformationGrid, Row } from '../../routes/BrowserGameDetails/styled';

export function BrowserGameDetailsSkeleton() {
  const mediaQuery = window.matchMedia('(max-width: 576px)');

  const style = {
    ...(mediaQuery.matches && {
      maxWidth: '380px',
      width: '100%',
      margin: '1rem'
    }),
  };

  const hiddenMobile = {
    ...(mediaQuery.matches && {
      display: 'none',
    }),
  };
  return (
    <Row>
      <CardContent style={{ padding: '0 0 44px 0' }}>
        <Box>
          <Skeleton
            animation="wave"
            variant="rounded"
            height={'12.875rem'}
            style={style}
          />
        </Box>
      </CardContent>
      <div>
        <Skeleton
          animation="wave"
          width={'40%'}
          variant="text"
          sx={{ fontSize: '2.5rem' }}
        />

        <Skeleton
          animation="wave"
          width={'45%'}
          variant="text"
          sx={{ fontSize: '1.5rem' }}
        />

        <Skeleton
          animation="wave"
          width={'100%'}
          variant="text"
          sx={{ fontSize: '8rem' }}
        />

        <Skeleton
          animation="wave"
          width={'30%'}
          variant="text"
          sx={{ fontSize: '1.5rem' }}
          style={{ marginBottom: '2rem' }}
        />

        <InformationGrid>
          <div>
            <Skeleton
              animation="wave"
              width={'30%'}
              variant="text"
              sx={{ fontSize: '1.5rem' }}
            />
            <Skeleton
              animation="wave"
              width={'45%'}
              variant="text"
              sx={{ fontSize: '1.5rem' }}
            />
          </div>
          <div>
            <Skeleton
              animation="wave"
              width={'30%'}
              variant="text"
              sx={{ fontSize: '1.5rem' }}
            />
            <Skeleton
              animation="wave"
              width={'45%'}
              variant="text"
              sx={{ fontSize: '1.5rem' }}
            />
          </div>
          <div>
            <Skeleton
              animation="wave"
              width={'30%'}
              variant="text"
              sx={{ fontSize: '1.5rem' }}
            />
            <Skeleton
              animation="wave"
              width={'45%'}
              variant="text"
              sx={{ fontSize: '1.5rem' }}
            />
          </div>
          <div>
            <Skeleton
              animation="wave"
              width={'30%'}
              variant="text"
              sx={{ fontSize: '1.5rem' }}
            />
            <Skeleton
              animation="wave"
              width={'45%'}
              variant="text"
              sx={{ fontSize: '1.5rem' }}
            />
          </div>
          <div>
            <Skeleton
              animation="wave"
              width={'30%'}
              variant="text"
              sx={{ fontSize: '1.5rem' }}
            />
            <Skeleton
              animation="wave"
              width={'45%'}
              variant="text"
              sx={{ fontSize: '1.5rem' }}
            />
          </div>
          <div>
            <Skeleton
              animation="wave"
              width={'30%'}
              variant="text"
              sx={{ fontSize: '1.5rem' }}
            />
            <Skeleton
              animation="wave"
              width={'45%'}
              variant="text"
              sx={{ fontSize: '1.5rem' }}
            />
          </div>
        </InformationGrid>

        <span style={hiddenMobile}>
          <Skeleton
            animation="wave"
            width={'35%'}
            variant="text"
            sx={{ fontSize: '1.5rem' }}
            style={{ margin: '2rem 0' }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
              gap: '1rem',
            }}
          >
            <Skeleton variant="rounded" width={210} height={146} />
            <Skeleton variant="rounded" width={210} height={146} />
            <Skeleton variant="rounded" width={210} height={146} />
          </div>
        </span>
      </div>
    </Row>
  );
}
